<?php
ini_set('display_errors', 1);
ini_set('error_reporting', -1);
/**
 * Class seoPanelMainController
 */
abstract class seoPanelMainController extends modExtraManagerController {
	/** @var seoPanel $seoPanel */
	public $seoPanel;


	/**
	 * @return void
	 */
	public function initialize() {
		$corePath = $this->modx->getOption('seopanel_core_path', null, $this->modx->getOption('core_path') . 'components/seopanel/');
		require_once $corePath . 'model/seopanel/seopanel.class.php';

		$this->seoPanel = new seoPanel($this->modx);
		$this->addCss($this->seoPanel->config['cssUrl'] . 'mgr/main.css');
        $this->addCss($this->seoPanel->config['cssUrl'] . 'mgr/css/font-awesome.min.css');
		$this->addJavascript($this->seoPanel->config['jsUrl'] . 'mgr/seopanel.js');
		$this->addHtml('
		<script type="text/javascript">
			seoPanel.config = ' . $this->modx->toJSON($this->seoPanel->config) . ';
			seoPanel.config.connector_url = "' . $this->seoPanel->config['connectorUrl'] . '";
		</script>
		');

		parent::initialize();
	}


	/**
	 * @return array
	 */
	public function getLanguageTopics() {
		return array('seopanel:default');
	}


	/**
	 * @return bool
	 */
	public function checkPermissions() {
		return true;
	}
}


/**
 * Class IndexManagerController
 */
class IndexManagerController extends seoPanelMainController {

	/**
	 * @return string
	 */
	public static function getDefaultController() {
		return 'home';
	}
}