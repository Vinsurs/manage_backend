# user collection

```javascript
{
	username:String,
	password:String,
	phone:string,
	email:string,
	create_time:Date,
	role_id:RoleId  //角色id
}
```

# role collection

```javascript
{
	role_name:String,   //角色名称
	priviledges:Array<String>,  //权限
	create_time:Date,//创建时间
	authorizedby:string, //授权人
	authorizedwhen:Date//授权时间
}
```

# product collection

```javascript
{
	name:String,
	price:number,
	store:number,//库存
	description:string,
	categoryId:string,//种类id
	imgUrl:string,
	detail:string,
	isOnSale:boolean //是否在售或下架
}
```

# category collection

```javascript
{
  name: string; //种类名称
}
```
