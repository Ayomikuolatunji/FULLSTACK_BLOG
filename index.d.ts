export default PortableText

declare function PortableText({content,className,serializers,...additionalOptions},{
    content:[object],
    className:string,
    serializers:object,
}):any


declare namespace PortableText {
    namespace protoTypes {
        const content:any;
        const className:any;
        const serializers:any;
    }
}