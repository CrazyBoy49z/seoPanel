<?php

/**
 * Remove an Sortings
 */
class seoPanelSortingRemoveProcessor extends modObjectProcessor {
	public $objectType = 'seoPanelSorting';
	public $classKey = 'seoPanelSorting';
	public $languageTopics = array('seopanel');
	//public $permission = 'remove';


	/**
	 * @return array|string
	 */
	public function process() {
		if (!$this->checkPermissions()) {
			return $this->failure($this->modx->lexicon('access_denied'));
		}

		$ids = $this->modx->fromJSON($this->getProperty('ids'));
		if (empty($ids)) {
			return $this->failure($this->modx->lexicon('seopanel_item_err_ns'));
		}

		foreach ($ids as $id) {
			/** @var seoPanelSorting $object */
			if (!$object = $this->modx->getObject($this->classKey, $id)) {
				return $this->failure($this->modx->lexicon('seopanel_item_err_nf'));
			}

			$object->remove();
		}

		return $this->success();
	}

}

return 'seoPanelSortingRemoveProcessor';