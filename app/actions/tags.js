export function addTags(tags){
  return {
    type: 'ADD_TAGS',
    tags
  };
}
export function addTag(tag){
  return {
    type: 'ADD_TAG',
    tag
  };
}

export function toggleTag(index){
  return {
    type: 'TOGGLE_TAG',
    index
  };
}

export function deleteTag(index){
  return {
    type: 'DELETE_TAG',
    index
  };
}

export function activeTag(index){
  return {
    type: 'ACTIVE_TAG',
    index
  };
}

export function unactiveTag(index){
  return {
    type: 'UNACTIVE_TAG',
    index
  };
}
