<?php
defined('_JEXEC') or die;

jimport('joomla.plugin.plugin');

class plgSystemarekcookies extends JPlugin{
	
	
	function onAfterRender()
	{
		
		$CSS_FOLDER = JURI::root() . 'plugins/system/arekcookies/addons/';
		
		$arekcookiescss = '<link type="text/css" rel="stylesheet" href= "' . $CSS_FOLDER . 'style.css" />'."\n";
	
		$JS_FOLDER = JURI::root() . 'plugins/system/arekcookies/js/';
	
		$arekcookiesjs = '<script type="text/javascript" src="' . $JS_FOLDER . 'script.js"></script>'."\n";
		
		$app = JFactory::getApplication();
		
		$document = JFactory::getDocument();

	
		
		$body = $app->getBody();
		if ($app->isSite() == false)
		{
			return false;
		}
		$body = str_replace('</body>', $arekcookiescss . 	$arekcookiesjs  . '</body>', $body);
		$app->setBody($body);
			
	}
}
?>