<?php

/**
 * Get a list of Sortings
 */
class seoPanelSortingGetListProcessor extends modObjectGetListProcessor {
	public $objectType = 'seoPanelSorting';
	public $classKey = 'seoPanelSorting';
	public $defaultSortField = 'id';
	public $defaultSortDirection = 'DESC';
	//public $permission = 'list';


	/**
	 * * We doing special check of permission
	 * because of our objects is not an instances of modAccessibleObject
	 *
	 * @return boolean|string
	 */
	public function beforeQuery() {
		if (!$this->checkPermissions()) {
			return $this->modx->lexicon('access_denied');
		}

		return true;
	}


	/**
	 * @param xPDOQuery $c
	 *
	 * @return xPDOQuery
	 */
	public function prepareQueryBeforeCount(xPDOQuery $c) {
		$query = trim($this->getProperty('query'));
		if ($query) {
			$c->where(array(
				'name:LIKE' => "%{$query}%",
				'OR:description:LIKE' => "%{$query}%",
			));
		}

		return $c;
	}


	/**
	 * @param xPDOObject $object
	 *
	 * @return array
	 */
	public function prepareRow(xPDOObject $object) {
		$array = $object->toArray();
		$array['actions'] = array();

		// Edit
		$array['actions'][] = array(
			'cls' => '',
			'icon' => 'icon icon-edit',
			'title' => $this->modx->lexicon('seopanel_item_update'),
			//'multiple' => $this->modx->lexicon('seopanel_items_update'),
			'action' => 'updateSorting',
			'button' => true,
			'menu' => true,
		);

		if (!$array['active']) {
			$array['actions'][] = array(
				'cls' => '',
				'icon' => 'icon icon-power-off action-green',
				'title' => $this->modx->lexicon('seopanel_item_enable'),
				'multiple' => $this->modx->lexicon('seopanel_items_enable'),
				'action' => 'enableSorting',
				'button' => true,
				'menu' => true,
			);
		}
		else {
			$array['actions'][] = array(
				'cls' => '',
				'icon' => 'icon icon-power-off action-gray',
				'title' => $this->modx->lexicon('seopanel_item_disable'),
				'multiple' => $this->modx->lexicon('seopanel_items_disable'),
				'action' => 'disableSorting',
				'button' => true,
				'menu' => true,
			);
		}

		// Remove
		$array['actions'][] = array(
			'cls' => '',
			'icon' => 'icon icon-trash-o action-red',
			'title' => $this->modx->lexicon('seopanel_item_remove'),
			'multiple' => $this->modx->lexicon('seopanel_items_remove'),
			'action' => 'removeSorting',
			'button' => true,
			'menu' => true,
		);

		return $array;
	}

}

return 'seoPanelSortingGetListProcessor';