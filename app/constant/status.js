/*jshint esversion:6*/
export const ADD_TAG = 'ADD_TAG';
export const TOGGLE_TAG = 'TOGGLE_TAG';
export const DELETE_TAG = 'DELETE_TAG';
export const ACTIVE_TAG = 'ACTIVE_TAG';

export const TAG_SEARCH = '搜索结果';
export const TAG_GUESS = '猜你喜欢';

export const BOOK_KEY_MAP = [
  {key: 'author', name: '作者', type: 'array'},
  {key: 'translator', name: '译者', type: 'array'},
  {key: 'publisher', name: '出版社', type: 'string'},
  {key: 'pubdate', name: '出版日期', type: 'string'},
  {key: 'pages', name: '页数', type: 'string'},
  {key: 'isbn13', name: 'ISBN', type: 'string'},
  {key: 'binding', name: '装帧', type: 'string'},
  {key: 'price', name: '售价', type: 'string'},
  {key: 'tags', name: '标签', type: 'array-json', field: 'name'},
  {key: 'author_intro', name: '作者介绍', type: 'string'},
  {key: 'origin_title', name: '原标题', type: 'string'}
];

export const WIZARD_TAGS = [
  {tag: '创业', isActive: false},
  {tag: '大数据', isActive: false},
  {tag: '动漫', isActive: false},
  {tag: '法律', isActive: false},
  {tag: '互联网', isActive: false},
  {tag: '历史', isActive: false},
  {tag: '建筑', isActive: false},
  {tag: '健康', isActive: false},
  {tag: '教育', isActive: false},
  {tag: '经济学', isActive: false},
  {tag: '旅游', isActive: false},
  {tag: '地理', isActive: false},
  {tag: '企业管理', isActive: false},
  {tag: '农业', isActive: false},
  {tag: '制造业', isActive: false},
  {tag: '军事', isActive: false},
  {tag: '汽车', isActive: false},
  {tag: '商业', isActive: false},
  {tag: '设计', isActive: false},
  {tag: '摄影', isActive: false},
  {tag: '生活', isActive: false},
  {tag: '时间管理', isActive: false},
  {tag: '市场营销', isActive: false},
  {tag: '体育', isActive: false},
  {tag: '文学', isActive: false},
  {tag: '心理学', isActive: false},
  {tag: '医学', isActive: false},
  {tag: '英语', isActive: false},
  {tag: '游戏', isActive: false},
  {tag: '职场', isActive: false},
  {tag: '自然科学', isActive: false}
];
