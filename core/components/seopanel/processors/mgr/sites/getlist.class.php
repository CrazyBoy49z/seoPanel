<?php

/**
 * Get a list of Sitess
 */
class seoPanelSitesGetListProcessor extends modObjectGetListProcessor {
	public $objectType = 'seoPanelSites';
	public $classKey = 'seoPanelSites';
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
                'domain:LIKE' => "%{$query}%",
                'OR:tic:LIKE' => "%{$query}%",
                'OR:pr:LIKE' => "%{$query}%",
                'OR:yaca:LIKE' => "%{$query}%",
                'OR:dmoz:LIKE' => "%{$query}%",
                'OR:yaindex:LIKE' => "%{$query}%",
                'OR:yaindex_up:LIKE' => "%{$query}%",
                'OR:gooindex:LIKE' => "%{$query}%",
                'OR:gooindex_up:LIKE' => "%{$query}%",
                'OR:liveinternet:LIKE' => "%{$query}%",
                'OR:domainend:LIKE' => "%{$query}%",
                'OR:update:LIKE' => "%{$query}%",
                'OR:sorting_id:LIKE' => "%{$query}%",
			));
		}
        if ($this->getProperty('combo')) {
            $c->where(array('active' => 1));
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
			'title' => $this->modx->lexicon('seopanel_sites_update'),
			//'multiple' => $this->modx->lexicon('seopanel_items_update'),
			'action' => 'updateSites',
			'button' => true,
			'menu' => true,
		);

		if (!$array['active']) {
			$array['actions'][] = array(
				'cls' => '',
				'icon' => 'icon icon-power-off action-green',
				'title' => $this->modx->lexicon('seopanel_site_enable'),
				'multiple' => $this->modx->lexicon('seopanel_sites_enable'),
				'action' => 'enableSites',
				'button' => true,
				'menu' => true,
			);
		}
		else {
			$array['actions'][] = array(
				'cls' => '',
				'icon' => 'icon icon-power-off action-gray',
				'title' => $this->modx->lexicon('seopanel_site_disable'),
				'multiple' => $this->modx->lexicon('seopanel_sites_disable'),
				'action' => 'disableSites',
				'button' => true,
				'menu' => true,
			);
		}

        // Update SEO
        $array['actions'][] = array(
            'cls' => '',
            'icon' => 'icon icon-trash-o action-red',
            'title' => $this->modx->lexicon('seopanel_site_seo'),
            'multiple' => $this->modx->lexicon('seopanel_sites_seo'),
            'action' => 'updateSitesSEO',
            'button' => true,
            'menu' => true,
        );

		// Remove
		$array['actions'][] = array(
			'cls' => '',
			'icon' => 'icon icon-trash-o action-red',
			'title' => $this->modx->lexicon('seopanel_site_remove'),
			'multiple' => $this->modx->lexicon('seopanel_sites_remove'),
			'action' => 'removeSites',
			'button' => true,
			'menu' => true,
		);

		return $array;
	}

}

return 'seoPanelSitesGetListProcessor';