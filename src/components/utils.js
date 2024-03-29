
/**
 * slugifies a phrase to be used within a url
 * @param {string} input - URL without slugify
 * @returns {string} 
 */
export function slugify(input) {
    if (!input)
        return '';
    var slug = input.toLowerCase().trim();
    // remove accents from charaters
    slug = slug.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    // replace invalid chars with spaces
    slug = slug.replace(/[^a-z0-9\s-]/g, ' ').trim();
    // replace multiple spaces or hyphens with a single hyphen
    slug = slug.replace(/[\s-]+/g, '%20');
    return slug;

    }