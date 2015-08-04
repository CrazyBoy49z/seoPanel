<?php
$xpdo_meta_map['seoPanelSites']= array (
  'package' => 'seopanel',
  'version' => '1.1',
  'table' => 'seopanel_sites',
  'extends' => 'xPDOSimpleObject',
  'fields' => 
  array (
    'domain' => NULL,
    'tic' => NULL,
    'pr' => NULL,
    'yaca' => 0,
    'dmoz' => 0,
    'yaindex' => NULL,
    'yaindex_up' => NULL,
    'gooindex' => NULL,
    'gooindex_up' => NULL,
    'liveinternet' => NULL,
    'domainend' => NULL,
    'update' => 'CURRENT_TIMESTAMP',
    'sorting_id' => NULL,
    'active' => 1,
  ),
  'fieldMeta' => 
  array (
    'domain' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '255',
      'phptype' => 'string',
      'null' => false,
    ),
    'tic' => 
    array (
      'dbtype' => 'int',
      'precision' => '10',
      'phptype' => 'integer',
      'null' => false,
    ),
    'pr' => 
    array (
      'dbtype' => 'int',
      'precision' => '2',
      'phptype' => 'integer',
      'null' => false,
    ),
    'yaca' => 
    array (
      'dbtype' => 'tinyint',
      'precision' => '4',
      'phptype' => 'integer',
      'null' => true,
      'default' => 0,
    ),
    'dmoz' => 
    array (
      'dbtype' => 'tinyint',
      'precision' => '4',
      'phptype' => 'integer',
      'null' => true,
      'default' => 0,
    ),
    'yaindex' => 
    array (
      'dbtype' => 'int',
      'precision' => '100',
      'phptype' => 'integer',
      'null' => false,
    ),
    'yaindex_up' => 
    array (
      'dbtype' => 'int',
      'precision' => '100',
      'phptype' => 'integer',
      'null' => false,
    ),
    'gooindex' => 
    array (
      'dbtype' => 'int',
      'precision' => '100',
      'phptype' => 'integer',
      'null' => false,
    ),
    'gooindex_up' => 
    array (
      'dbtype' => 'int',
      'precision' => '100',
      'phptype' => 'integer',
      'null' => false,
    ),
    'liveinternet' => 
    array (
      'dbtype' => 'int',
      'precision' => '10',
      'phptype' => 'integer',
      'null' => false,
    ),
    'domainend' => 
    array (
      'dbtype' => 'int',
      'precision' => '10',
      'phptype' => 'integer',
      'null' => false,
    ),
    'update' => 
    array (
      'dbtype' => 'timestamp',
      'phptype' => 'timestamp',
      'null' => false,
      'default' => 'CURRENT_TIMESTAMP',
      'extra' => 'on update current_timestamp',
    ),
    'sorting_id' => 
    array (
      'dbtype' => 'int',
      'precision' => '1',
      'phptype' => 'integer',
      'null' => false,
    ),
    'active' => 
    array (
      'dbtype' => 'tinyint',
      'precision' => '1',
      'phptype' => 'integer',
      'null' => true,
      'default' => 1,
    ),
  ),
  'indexes' => 
  array (
    'active' => 
    array (
      'alias' => 'active',
      'primary' => false,
      'unique' => false,
      'type' => 'BTREE',
      'columns' => 
      array (
        'active' => 
        array (
          'length' => '',
          'collation' => 'A',
          'null' => false,
        ),
      ),
    ),
  ),
  'composites' => 
  array (
    'seoPanelSorting' => 
    array (
      'class' => 'seoPanelSorting',
      'local' => 'sorting_id',
      'foreign' => 'id',
      'cardinality' => 'many',
      'owner' => 'local',
    ),
  ),
);
