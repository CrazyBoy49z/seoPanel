<?php

/**
 * Create an Item
 */
class seoPanelItemCreateProcessor extends modObjectCreateProcessor {
	public $objectType = 'seoPanelItem';
	public $classKey = 'seoPanelItem';
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

return 'seoPanelItemCreateProcessor';