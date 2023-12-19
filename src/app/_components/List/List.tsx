const List = <ItemType extends any>({items,renderItem,...restProps}:{items:ItemType[],renderItem:({item,i}:{item:ItemType,i:number})=>React.ReactNode,[key:string]: any}) => {
    return <>{items.map((item,i)=>renderItem({item,i,...restProps}))}</>

}

export default List