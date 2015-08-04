<?php
$xpdo_meta_map['seoPanelSorting']= array (
  'package' => 'seopanel',
  'version' => '1.1',
  'table' => 'seopanel_sorting',
  'extends' => 'xPDOSimpleObject',
  'fields' => 
  array (
    'name' => NULL,
    'color' => NULL,
    'alias' => NULL,
    'active' => 1,
  ),
  'fieldMeta' => 
  array (
    'name' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '255',
      'phptype' => 'string',
      'null' => false,
    ),
    'color' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '7',
      'phptype' => 'string',
      'null' => false,
    ),
    'alias' => 
    array (
      'dbtype' => 'varchar',
      'precision' => '255',
      'phptype' => 'string',
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
    'id' => 
    array (
      'alias' => 'id',
      'primary' => false,
      'unique' => false,
      'type' => 'BTREE',
      'columns' => 
      array (
        'id' => 
        array (
          'length' => '',
          'collation' => 'A',
          'null' => false,
        ),
      ),
    ),
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
  'aggregates' => 
  array (
    'seoPanelSites' => 
    array (
      'class' => 'seoPanelSites',
      'local' => 'id',
      'foreign' => 'sorting_id',
      'cardinality' => 'one',
      'owner' => 'foreign',
    ),
  ),
);
