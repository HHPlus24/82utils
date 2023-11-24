import { slugify } from './slugify';

describe('slugify', () => {
  it('should trim leading and trailing spaces', () => {
    const text = ' example ';
    const slug = 'example';
    expect(slugify(text)).toBe(slug);
  });

  it('should remove leading and trailing dashes', () => {
    const text = '-slugtextexample-';
    const slug = 'slugtextexample';
    expect(slugify(text)).toBe(slug);
  })

  it('should convert string to lowercase', () => {
    const text = 'SlugTextExample';
    const slug = 'slugtextexample';
    expect(slugify(text)).toBe(slug);
  });

  it('should remove special characters', () => {
    const text = '$lugt*xtex@mp!e';
    const slug = 'lugtxtexmpe';
    expect(slugify(text)).toBe(slug);
  })

  it('should replace underscores with dashes', () => {
    const text = 'slug_text_example';
    const slug = 'slug-text-example';
    expect(slugify(text)).toBe(slug);
  })

  it('should replace spaces with dashes', () => {
    const text = 'slug text example';
    const slug = 'slug-text-example';
    expect(slugify(text)).toBe(slug);
  })

  it('should replace multiple dashes with single dash', () => {
    const text = 'slug---text--example';
    const slug = 'slug-text-example';
    expect(slugify(text)).toBe(slug);
  });
 })