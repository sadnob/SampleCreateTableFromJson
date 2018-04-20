$(function () {
  var columns = [
    {id: "id", name: "ID", field: "id", minWidth: 24, width: 24, editor: Slick.Editors.Text},
    {id: "title", name: "書名", field: "title", width: 200, editor: Slick.Editors.Text},
    {id: "authors", name: "著者", field: "authors", width: 160, editor: Slick.Editors.Text},
    {id: "publisher", name: "出版社", field: "publisher", editor: Slick.Editors.Text},
    {id: "published-on", name: "出版日", field: "publishedOn", width: 70, editor: Slick.Editors.Text},
    {id: "book-type", name: "書籍種別", field: "bookType", width: 40, editor: Slick.Editors.Text},
    {id: "book-info-url", name: "書籍情報URL", field: "bookInfoURL", editor: Slick.Editors.Text},
    {id: "purchase-url", name: "購入URL", field: "purchaseURL", editor: Slick.Editors.Text},
    {id: "reading-status", name: "読書状態", field: "readingStatus", width: 46, editor: Slick.Editors.Text}
  ];

  var data = [
    {
      id: 1,
      title: "パーフェクトRuby",
      authors: "Rubyサポーターズ, すがわら まさのり, 寺田 玄太郎, 三村 益隆, 近藤 宇智朗, 橋立 友宏, 関口 亮一",
      publisher: "技術評論社",
      publishedOn: "2013-08-10",
      bookType: "紙",
      bookInfoURL: "http://www.amazon.co.jp/dp/4774158798",
      purchaseURL: "http://www.yodobashi.com/%E3%83%91%E3%83%BC%E3%83%95%E3%82%A7%E3%82%AF%E3%83%88Ruby-%E5%8D%98%E8%A1%8C%E6%9C%AC/pd/100000009001925295/",
      readingStatus: "読書中"
    },
    {
      id: 2,
      title: "Sphinxをはじめよう",
      authors: "清水川貴之, 小宮健, 山田剛, 若山史郎",
      publisher: "O'Reilly Japan",
      publishedOn: "2013-09-01",
      bookType: "mobi",
      bookInfoURL: "http://www.oreilly.co.jp/books/9784873116488/",
      purchaseURL: "http://www.oreilly.co.jp/books/9784873116488/",
      readingStatus: "読了"
    },
// ...(snip)...
    {
      id: 20,
      title: "Working With Unix Processes",
      authors: "Jesse Storimer",
      publisher: "Amazon Services International, Inc.",
      bookType: "mobi",
      bookInfoURL: "http://www.amazon.co.jp/dp/B0078VSRUE",
      purchaseURL: "http://www.amazon.co.jp/dp/B0078VSRUE",
      readingStatus: "読書中"
    }
  ];

  var options = {
    editable: true
  };

  var grid = new Slick.Grid("#myGrid", data, columns, options);
});