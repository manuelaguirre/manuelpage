const TYPE_DEFINITION = `type SystemInfo {
  id: String!
  name: String!
  codename: String!
  language: String!
  type: String!
  lastModified: String!
}
interface ContentItem {
  system: SystemInfo!
}
type MultipleChoiceElementOption {
  name: String!
  codename: String
}
type TaxonomyTerm {
  name: String!
  codename: String
}
type Asset {
  name: String
  type: String
  size: Int
  description: String
  url: String
  width: Int
  height: Int
}
type Link {
  codename: String
  itemID: String
  urlSlug: String
  type: String
}
type RichTextImage {
  imageId: String!
  url: String!
  description: String
  width: Int
  height: Int
}
type TextElement {
  type: String!
  name: String!
  value: String
}
type NumberElement {
  type: String!
  name: String!
  value: Int
}
type DateTimeElement {
  type: String!
  name: String!
  value: String
}
type MultipleChoiceElement {
  type: String!
  name: String!
  value: [MultipleChoiceElementOption]
}
type UrlSlugElement {
  type: String!
  name: String!
  value: String
}
type TaxonomyElement {
  type: String!
  name: String!
  value: [TaxonomyTerm]
  taxonomyGroup: String
}
type AssetElement {
  type: String!
  name: String!
  value: [Asset]
}
type RichTextElement {
  type: String!
  name: String!
  value: String
  linkedItemCodenames: [String]
  links: [Link]
  images: [RichTextImage]
  resolvedHtml: String
}
type LinkedItemsElement {
  type: String!
  name: String!
  value: [ContentItem]
  itemCodenames: [String]
}
type CustomElement {
  type: String!
  name: String!
  value: String
}

type ArticleExampleContentTypeContentType implements ContentItem {
  system: SystemInfo!
  body: RichTextElement
  title: TextElement
  url: UrlSlugElement
}

type LandingPageExampleContentTypeContentType implements ContentItem {
  system: SystemInfo!
  body: RichTextElement
  product_list: LinkedItemsElement
  title: TextElement
  url: UrlSlugElement
}

type PoemContentType implements ContentItem {
  system: SystemInfo!
  title: TextElement
  body: TextElement
}

type ProductExampleContentTypeContentType implements ContentItem {
  system: SystemInfo!
  url: UrlSlugElement
  description: RichTextElement
  name: TextElement
  image: AssetElement
  taxonomy___categorizing_target_audience: TaxonomyElement
}`;

module.exports = {
  TYPE_DEFINITION
}