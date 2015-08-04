<?php
/** @noinspection PhpIncludeInspection */
require_once dirname(dirname(dirname(dirname(__FILE__)))) . '/config.core.php';
/** @noinspection PhpIncludeInspection */
require_once MODX_CORE_PATH . 'config/' . MODX_CONFIG_KEY . '.inc.php';
/** @noinspection PhpIncludeInspection */
require_once MODX_CONNECTORS_PATH . 'index.php';
/** @var seoPanel $seoPanel */
$seoPanel = $modx->getService('seopanel', 'seoPanel', $modx->getOption('seopanel_core_path', null, $modx->getOption('core_path') . 'components/seopanel/') . 'model/seopanel/');
$modx->lexicon->load('seopanel:default');

// handle request
$corePath = $modx->getOption('seopanel_core_path', null, $modx->getOption('core_path') . 'components/seopanel/');
$path = $modx->getOption('processorsPath', $seoPanel->config, $corePath . 'processors/');
$modx->request->handleRequest(array(
	'processors_path' => $path,
	'location' => '',
));