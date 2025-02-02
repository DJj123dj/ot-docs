type ODValidDeclarationType = "class"|"interface"|"type"|"variable"|"enum"|"other"
type ODValidMemberType = "constructor"|"property"|"method"|"enumerable"|"other"
type ODValidElementType = "unknown"|"primitive"|"array"|"union"|"intersection"|"reference"|"internal"|"external"|"typeParam"|"function"|"literal"|"keyof"|"readonly"|"unique"|"conditional"|"index"|"mapped"|"optional"|"predicate"|"query"|"rest"|"tuple"|"template"

type ODValidType = ODValidDeclarationType|ODValidMemberType|ODValidElementType

interface ODStructure<Type extends ODValidType> {
    type:Type
}
interface ODDeclarationStructure<Children extends object> extends ODStructure<ODValidDeclarationType> {
    name:string,
    comment:string|null,
    constant:boolean,
    source:string|null,
    children:Children[],
    typeParams:{name:string,type:ODValidElementStructure}[]|null
}
interface ODMemberStructure<Details extends ODValidElementStructure|null> extends ODStructure<ODValidMemberType> {
    name:string,
    comment:string|null,
    source:string|null,
    details:Details
}

//DECLARATION STRUCTURES
interface ODClassStructure extends ODDeclarationStructure<ODPropertyStructure|ODMethodStructure|ODConstructorStructure|ODOtherMemberStructure> {}
interface ODInterfaceStructure extends ODDeclarationStructure<ODPropertyStructure|ODMethodStructure|ODOtherMemberStructure> {}
interface ODTypeStructure extends ODDeclarationStructure<ODValidElementStructure> {}
interface ODVariableStructure extends ODDeclarationStructure<ODValidElementStructure> {}
interface ODEnumStructure extends ODDeclarationStructure<ODEnumerableStructure|ODOtherMemberStructure> {}
interface ODOtherStructure extends ODDeclarationStructure<object> {}

//MEMBER STRUCTURES
interface ODConstructorStructure extends ODMemberStructure<ODFunctionStructure> {}
interface ODPropertyStructure extends ODMemberStructure<ODValidElementStructure> {}
interface ODMethodStructure extends ODMemberStructure<ODFunctionStructure> {}
interface ODEnumerableStructure extends ODMemberStructure<ODValidElementStructure> {}
interface ODOtherMemberStructure extends ODMemberStructure<null> {}

//ELEMENT STRUCTURES
interface ODUnknownStructure extends ODStructure<"unknown"> {}
interface ODPrimitiveStructure extends ODStructure<"primitive"> {
    name:string
}
interface ODArrayStructure extends ODStructure<"array"> {
    child:ODValidElementStructure
}
interface ODUnionStructure extends ODStructure<"union"> {
    children:ODValidElementStructure[]
}
interface ODIntersectionStructure extends ODStructure<"intersection"> {
    children:ODValidElementStructure[]
}
interface ODReferenceStructure extends ODStructure<"reference"> {
    name:string
    target:ODValidDeclarationType
    typeArguments: ODValidElementStructure[]|null
}
interface ODInternalStructure extends ODStructure<"internal"> {
    name:string,
    typeArguments: ODValidElementStructure[]|null
}
interface ODExternalStructure extends ODStructure<"external"> {
    name:string,
    package:string,
    typeArguments: ODValidElementStructure[]|null
}
interface ODTypeParamStructure extends ODStructure<"typeParam"> {
    name:string,
    typeArguments: ODValidElementStructure[]|null
}
interface ODFunctionStructure extends ODStructure<"function"> {
    inherited:boolean,
    comment:string|null,
    parameters:{name:string,details:ODValidElementStructure}[],
    returns:ODValidElementStructure
}
interface ODLiteralStructure extends ODStructure<"literal"> {
    name:string
}
interface ODKeyOfStructure extends ODStructure<"keyof"> {
    child:ODValidElementStructure
}
interface ODReadonlyStructure extends ODStructure<"readonly"> {
    child:ODValidElementStructure
}
interface ODUniqueStructure extends ODStructure<"unique"> {
    child:ODValidElementStructure
}
interface ODConditionalStructure extends ODStructure<"conditional"> {
    checker:ODValidElementStructure,
    extends:ODValidElementStructure,
    trueValue:ODValidElementStructure,
    falseValue:ODValidElementStructure
}
interface ODIndexStructure extends ODStructure<"index"> {
    index:ODValidElementStructure,
    object:ODValidElementStructure
}
interface ODMappedStructure extends ODStructure<"mapped"> {
    parameterName:string,
    parameter:ODValidElementStructure,
    template:ODValidElementStructure
}
interface ODOptionalStructure extends ODStructure<"optional"> {
    child:ODValidElementStructure
}
interface ODPredicateStructure extends ODStructure<"predicate"> {
    name:string,
    target:ODValidElementStructure
}
interface ODQueryStructure extends ODStructure<"query"> {
    target:ODValidElementStructure
}
interface ODRestStructure extends ODStructure<"rest"> {
    child:ODValidElementStructure
}
interface ODTupleStructure extends ODStructure<"tuple"> {
    children:ODValidElementStructure[]
}
interface ODTemplateStructure extends ODStructure<"template"> {
    head:string,
    tails:{element:ODValidElementStructure,text:string}[]
}

//ALL STRUCTURES
type ODValidDeclarationStructure = (
    ODClassStructure|
    ODInterfaceStructure|
    ODTypeStructure|
    ODVariableStructure|
    ODEnumStructure|
    ODOtherStructure
)
type ODValidMemberStructure = (
    ODConstructorStructure|
    ODPropertyStructure|
    ODMethodStructure|
    ODEnumerableStructure|
    ODOtherMemberStructure
)
type ODValidElementStructure = (
    ODUnknownStructure|
    ODPrimitiveStructure|
    ODArrayStructure|
    ODUnionStructure|
    ODIntersectionStructure|
    ODReferenceStructure|
    ODInternalStructure|
    ODExternalStructure|
    ODTypeParamStructure|
    ODFunctionStructure|
    ODLiteralStructure|
    ODKeyOfStructure|
    ODReadonlyStructure|
    ODUniqueStructure|
    ODConditionalStructure| 
    ODIndexStructure|
    ODMappedStructure|
    ODOptionalStructure|
    ODPredicateStructure|
    ODQueryStructure|
    ODRestStructure|
    ODTupleStructure|
    ODTemplateStructure
)
type ODValidStructure = ODValidDeclarationStructure|ODValidMemberStructure|ODValidElementStructure

interface ODExternalStructure_DiscordJs {
    package:"discord.js"|"formatters"|"builders"|"collection"|"core"|"rest",
    type:"class"|"interface"|"enum"|"type"|"variable"|"function",
    name:string
}