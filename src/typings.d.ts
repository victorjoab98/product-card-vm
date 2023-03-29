//Este archivo es para definir los modulos y typescript sepa como tratarlos
declare module '*.css' {
    const content: { [className: string]: string };
    export default content;
}

declare module "*.jpg" {
    const value: any;
    export default value;
}