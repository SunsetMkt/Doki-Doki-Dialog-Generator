import { IRootState } from '@/store';
import { IAssetSwitch } from '@/store/content';
import {
	getData,
	getHeads,
	getPose,
	ICharacter,
} from '@/store/object-types/characters';
import { IPanel } from '@/store/panels';
import {
	Character as CharacterModel,
	Pose,
} from '@edave64/doki-doki-dialog-generator-pack-format/dist/v2/model';
import { DeepReadonly } from 'ts-essentials';
import { Store } from 'vuex';
import {
	AssetListRenderable,
	IDrawAssets,
	IDrawAssetsUnloaded,
} from './asset-list-renderable';

/**
 * Renders a character (Like Monika, Sayori, etc.) to the scene.
 */
export class Character extends AssetListRenderable<ICharacter> {
	public constructor(
		obj: DeepReadonly<ICharacter>,
		private data: DeepReadonly<CharacterModel<IAssetSwitch>>
	) {
		super(obj);
	}

	public prepareRender(
		panel: DeepReadonly<IPanel>,
		store: Store<IRootState>,
		lq: boolean
	): void | Promise<unknown> {
		this.data = getData(store, this.obj);
		return super.prepareRender(panel, store, lq);
	}

	protected isAssetListOutdated(): boolean {
		return true;
	}

	protected getAssetList(): Array<IDrawAssetsUnloaded | IDrawAssets> {
		const pose = getPose(this.data, this.obj) as Pose<IAssetSwitch>;
		const currentHeads = getHeads(this.data, this.obj);
		const drawAssetsNew: Array<IDrawAssetsUnloaded | IDrawAssets> = [];
		const oldAssets = this.assetList || [];

		for (const renderCommand of pose.renderCommands) {
			let newAssets: IDrawAssetsUnloaded['assets'] | null = null;
			switch (renderCommand.type) {
				case 'head': {
					if (!currentHeads) continue;
					const headVariant: DeepReadonly<IAssetSwitch[]> | undefined =
						currentHeads.variants[this.obj.posePositions.head || 0];
					if (headVariant == null) continue;
					newAssets = headVariant;
					break;
				}
				case 'image':
					newAssets = renderCommand.images;
					break;
				case 'pose-part': {
					const posePosition = pose.positions[renderCommand.part];
					// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
					if (!posePosition || posePosition.length === 0) {
						break;
					}
					const partAssets =
						posePosition[this.obj.posePositions[renderCommand.part] || 0];
					// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
					if (!partAssets) break;
					newAssets = partAssets;
					break;
				}
			}
			if (newAssets) {
				const oldEntry = oldAssets.find((x) => x.assets === newAssets);
				// Reuse old entry
				if (oldEntry) {
					drawAssetsNew.push({
						...oldEntry,
						offset: renderCommand.offset,
						composite: renderCommand.composite,
					});
				} else {
					drawAssetsNew.push({
						assets: newAssets,
						offset: renderCommand.offset,
						composite: renderCommand.composite,
					});
				}
			}
		}
		return drawAssetsNew;
	}
}
