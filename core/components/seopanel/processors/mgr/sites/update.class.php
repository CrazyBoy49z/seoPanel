<?php

/**
 * Update an Sites
 */
class seoPanelSitesUpdateProcessor extends modObjectUpdateProcessor {
	public $objectType = 'object';
	public $classKey = 'seoPanelSites';
	public $languageTopics = array('seopanel');
	//public $permission = 'save';


	/**
	 * We doing special check of permission
	 * because of our objects is not an instances of modAccessibleObject
	 *
	 * @return bool|string
	 */
	public function beforeSave() {
		if (!$this->checkPermissions()) {
			return $this->modx->lexicon('access_denied');
		}

		return true;
	}


	/**
	 * @return bool
	 */
	public function beforeSet() {
		$id = (int)$this->getProperty('id');
		$domain = trim($this->getProperty('domain'));
		if (empty($id)) {
			return $this->modx->lexicon('seopanel_sites_err_ns');
		}
        $this->setProperty('yaca',  $this->getProperty('yaca') == 'true' ? 1 : 0);
        $this->setProperty('dmoz',  $this->getProperty('dmoz') == 'true' ? 1 : 0);
		if (empty($domain)) {
			$this->modx->error->addField('domain', $this->modx->lexicon('seopanel_sites_err_name'));
		}
		elseif ($this->modx->getCount($this->classKey, array('domain' => $domain, 'id:!=' => $id))) {
			$this->modx->error->addField('domain', $this->modx->lexicon('seopanel_sites_err_ae'));
		}

		return parent::beforeSet();
	}
}

return 'seoPanelSitesUpdateProcessor';
