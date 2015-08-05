<?php

/**
 * Create an Sites
 */
class seoPanelSitesCreateProcessor extends modObjectCreateProcessor {
	public $objectType = 'object';
	public $classKey = 'seoPanelSites';
	public $languageTopics = array('seopanel');

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

        if (!$this->modx->user->id) return 'Вам нужно авторизоваться';
        $this->setProperty('created_by', $this->modx->user->id);
        return true;

		return parent::beforeSet();
	}

}

return 'seoPanelSitesCreateProcessor';