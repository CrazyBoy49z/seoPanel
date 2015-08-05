<?php

/**
 * Get an Sites
 */
class seoPanelSitesGetProcessor extends modObjectGetProcessor {
	public $objectType = 'object';
	public $classKey = 'seoPanelSites';
	public $languageTopics = array('seopanel:default');
	//public $permission = 'view';


	/**
	 * We doing special check of permission
	 * because of our objects is not an instances of modAccessibleObject
	 *
	 * @return mixed
	 */
	public function process() {
		if (!$this->checkPermissions()) {
			return $this->failure($this->modx->lexicon('access_denied'));
		}

		return parent::process();
	}

}

return 'seoPanelSitesGetProcessor';