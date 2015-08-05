<?php
ini_set('display_errors', 1);
ini_set('error_reporting', -1);
/**
 * The home manager controller for seoPanel.
 *
 */
class seoPanelHomeManagerController extends seoPanelMainController {
	/* @var seoPanel $seoPanel */
	public $seoPanel;


	/**
	 * @param array $scriptProperties
	 */
	public function process(array $scriptProperties = array()) {
	}


	/**
	 * @return null|string
	 */
	public function getPageTitle() {
		return $this->modx->lexicon('seopanel');
	}


	/**
	 * @return void
	 */
	public function loadCustomCssJs() {
		$this->addCss($this->seoPanel->config['cssUrl'] . 'mgr/main.css');
		$this->addCss($this->seoPanel->config['cssUrl'] . 'mgr/bootstrap.buttons.css');
		$this->addJavascript($this->seoPanel->config['jsUrl'] . 'mgr/misc/utils.js');
		$this->addJavascript($this->seoPanel->config['jsUrl'] . 'mgr/widgets/sites.grid.js');
		$this->addJavascript($this->seoPanel->config['jsUrl'] . 'mgr/widgets/sites.windows.js');
        $this->addJavascript($this->seoPanel->config['jsUrl'] . 'mgr/widgets/sorting.windows.js');
		$this->addJavascript($this->seoPanel->config['jsUrl'] . 'mgr/widgets/home.panel.js');
		$this->addJavascript($this->seoPanel->config['jsUrl'] . 'mgr/sections/home.js');
		$this->addHtml('<script type="text/javascript">
		Ext.onReady(function() {
			MODx.load({ xtype: "seopanel-page-home"});
		});
		</script>');
	}


	/**
	 * @return string
	 */
	public function getTemplateFile() {
		return $this->seoPanel->config['templatesPath'] . 'home.tpl';
	}
}