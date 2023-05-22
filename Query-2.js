// { $gte: 5000, $lte: 9000 } price hobe 5000 soho upore
// abong 9000 soho er nicher gula , koma dea and bujhay
find({ price: { $gte: 5000, $lte: 9000 } }, { price: 1 });
// { $in: [9000, 5000] } $in operator dea array er moddhe ja ja ache spicific vabe
// segulai dekhao
find({ price: { $in: [9000, 5000] } }, { price: 1 });
// $nin  mane not in  mane array te ja ja ache oigulo chara dekhao
find({ price: { $nin: [9000, 5000] } }, { price: 1 });
