// If you want to support other asset types (svg, jpeg, jpg, etc) that use webpacks's native asset import, add module declaration here
declare module "*.png" {
  const content: string;
  export default content;
}
