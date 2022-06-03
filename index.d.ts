export default PortableText
export function blockContentToPlainText(blocks?:[any]):string


/**
 * 
 * @param {string} props
 * @param {[string]} props.content:
 * @param {string} props.className
 * @param {string} props.serializers
 * @param return
 */

declare function PortableText({content,className,serializers,...additionalOptions},{
    content:[object],
    className:string,
    serializers:object,
    dataset:string,
    projectId:string,
}):any


declare namespace PortableText {
    namespace protoTypes {
        const content:any;
        const className:any;
        const serializers:any;
        const dataset:string
        const projectId:string
    }
}