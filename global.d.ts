declare module "*.scss" {
    const classes: { readonly [key: string]: string };
    export default classes;
}
// 如果使用的第三方库没有ts，可以自己在这边申明
