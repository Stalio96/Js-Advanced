function editElement(ref, match, replacer) {
    // TODO

    const content = ref.textContent;

    const matcher = new RegExp(match, 'g');

    let edit = content.replace(matcher, replacer);
  
    ref.textContent = edit;
}
