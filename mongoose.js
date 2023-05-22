// price 2200 hobe emon gula dekhao
find({ price: 2200 });
//othoba $eq operator use koreo kora jay
find({ price: { $eq: 1000 } });
// value string hole string way te likhte hobe jemon
find({ brand: { $eq: 'shirt' } });
// same condition e kon kon field ami dekhabo , { brand: 1, price: 1 }
//mane brand and price dekhao sudhu.
// brand shirt ache jaader segulor moddhe sudhu brand and price show koro.
find({ brand: { $eq: 'shirt' } }, { brand: 1, price: 1 });
// not equal $ne  mane brand shirt chara baki gula dekhao
// , { brand: 1 } eita mane sudhu brand field ta dekhao
find({ brand: { $ne: 'shirt' } }, { brand: 1 });
