<?php

/**
 * Create an Sites
 */
class seoPanelSitesCreateProcessor extends modObjectCreateProcessor {
	public $objectType = 'seoPanelSites';
	public $classKey = 'seoPanelSites';
	public $languageTopics = array('seopanel');
	//public $permission = 'create';


	/**
	 * @return bool
	 */
	public function beforeSet() {
		$domain = trim($this->getProperty('domain'));
		if (empty($domain)) {
			$this->modx->error->addField('domain', $this->modx->lexicon('seopanel_sites_err_domain'));
		}
		elseif ($this->modx->getCount($this->classKey, array('name' => $name))) {
			$this->modx->error->addField('domain', $this->modx->lexicon('seopanel_sites_err_ae'));
		}

		return parent::beforeSet();
	}

}

return 'seoPanelSitesCreateProcessor';