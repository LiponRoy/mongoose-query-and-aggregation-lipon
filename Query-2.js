// { $gte: 5000, $lte: 9000 } price hobe 5000 soho upore
// abong 9000 soho er nicher gula , koma dea and bujhay
find({ price: { $gte: 5000, $lte: 9000 } }, { price: 1 });
// { $in: [9000, 5000] } $in operator dea array er moddhe ja ja ache spicific vabe
// segulai dekhao
find({ price: { $in: [9000, 5000] } }, { price: 1 });
// $nin  mane not in  mane array te ja ja ache oigulo chara dekhao
find({ price: { $nin: [9000, 5000] } }, { price: 1 });

// multiple condition sob milte hobe $and operator er moddhe
// array er moddhe ekta ekta kore condition dite hobe
// ekhane brand men, price 10000 er besi ebong 20000 er kom hote hobe

find(
	{
		$and: [{ brand: 'men' }, { price: { $gt: 10000 } }, { price: { $lt: 20000 } }],
	},
	{ price: 1, brand: 1 },
);

// $or uporer $and er motoi but jekono ekta mach korlei dekhabe
//  jemon eikhane brand men hole dekhabe  abar price 10000 er besi
// holeo dekhabe price jodi women er moddheo 10000 er besi pay
// setao dekhabe.

const allProduct = await Product.find(
	{
		$or: [{ brand: 'men' }, { price: { $gt: 10000 } }],
	},
	{ price: 1, brand: 1 },
);
