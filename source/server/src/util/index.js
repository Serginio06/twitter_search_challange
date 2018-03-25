// Here we keep common function used in app


// Return string with hashtags split by spaces where every word start with #
export const getHashtagsString = (hashTags) => {
    const arr = hashTags.replace(/#/g,'').split(/[ ,]+/);

    return '#' + arr.join(' #');
}


