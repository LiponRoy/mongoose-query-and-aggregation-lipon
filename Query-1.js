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
// gater than $gt eikhane 10,000 takar upore gula dekhao
find({ price: { $gt: 10000 } }, { price: 1 });
// gater than equal $gte eikhane 10,000 taka and er upore gula dekhao
find({ price: { $gte: 10000 } }, { price: 1 });
// Less than equal $lte here 9000 soho and er kom er gula dekhao
find({ price: { $lte: 9000 } }, { price: 1 });
// sort kora .sort({ price: 1 }); mane price er upor vitti kore 1 mane choto theke boro akare dekhao
find({ price: { $lte: 9000 } }, { price: 1 }).sort({ price: 1 });
// sort kora .sort({ price: -1 });  -1 mane boro theke choto
find({ price: { $lte: 9000 } }, { price: 1 }).sort({ price: -1 });
