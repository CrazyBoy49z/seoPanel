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
		$name = trim($this->getProperty('name'));
		if (empty($name)) {
			$this->modx->error->addField('name', $this->modx->lexicon('seopanel_item_err_name'));
		}
		elseif ($this->modx->getCount($this->classKey, array('name' => $name))) {
			$this->modx->error->addField('name', $this->modx->lexicon('seopanel_item_err_ae'));
		}

		return parent::beforeSet();
	}

}

return 'seoPanelSitesCreateProcessor';