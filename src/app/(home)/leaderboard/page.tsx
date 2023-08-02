import Image from "next/image";

interface RankingItem {
  name: string;
  email: string;
  score: number;
}
export default function Leaderboard() {
  const rankingList: RankingItem[] = [
    {
      name: "Nguyễn Hải Đăng",
      email: "dangnhse161128@fpt.edu.vn",
      score: 120,
    },
    {
      name: "Hoàng Minh An",
      email: "minhan2002hoang@gmail.com",
      score: 76,
    },
    {
      name: "Phạm Thị Thuỳ Lan",
      email: "thuylanlan@gmail.com",
      score: 32,
    },
    {
      name: "Văn Thị Hà Tâm",
      email: "mint.preminum@gmail.com",
      score: 95,
    },
    {
      name: "Nguyễn Trí Anh",
      email: "anh007008009@gmail.com",
      score: 68,
    },
    {
      name: "Lê Bảo Trân",
      email: "mint.tran@gmail.com",
      score: 42,
    },
    {
      name: "Le Ngoc Phung",
      email: "phungle2511@gmail.com",
      score: 12,
    },
    {
      name: "Doan Ngoc Khanh Linh",
      email: "linhdoanngoc.2202@gmail.com",
      score: 91,
    },
    {
      name: "Ngô Thuý Hằng",
      email: "hangnt0309@gmail.com",
      score: 85,
    },
    {
      name: "Đoàn Thuý An",
      email: "andoan1506@gmail.com",
      score: 53,
    },
    {
      name: "Võ Thành Nam",
      email: "namvt1372@gmail.com",
      score: 22,
    },
    {
      name: "Phan Huy Hoàng",
      email: "hoangmail78@gmail.com",
      score: 19,
    },
    {
      name: "Phạm Nguyễn Phương Thuỳ",
      email: "pntt1211@gmail.com",
      score: 88,
    },
    {
      name: "Huỳnh Hoàng Huy",
      email: "huynhhuy.forwork@gmail.com",
      score: 57,
    },
    {
      name: "Le Trong",
      email: "trongle.100199@gmail.com",
      score: 9,
    },
    {
      name: "Bui Trinh Quynh Nhien",
      email: "buitrinhquynhnhien@gmail.com",
      score: 72,
    },
    {
      name: "Ho Thanh Tam",
      email: "hothanhtamm5699@gmail.com",
      score: 41,
    },
    {
      name: "Vo Thu Ha",
      email: "vothuha.cmo@gmail.com",
      score: 50,
    },
    {
      name: "Tran Ngoc Son",
      email: "trangocson10@gmail.com",
      score: 60,
    },
    {
      name: "Phạm Ngọc Bảo",
      email: "baogpham02@gmail.com",
      score: 84,
    },
    {
      name: "Phạm Quỳnh Chi",
      email: "yooneunji302@gmail.com",
      score: 35,
    },
    {
      name: "Nguyễn Hoài Tâm",
      email: "gundamlv6@gmail.com",
      score: 90,
    },
    {
      name: "Nguyễn Trí Thịnh",
      email: "thinn2002@gmail.com",
      score: 80,
    },
    {
      name: "Nguyễn Hải Đăng",
      email: "dangnhse161128@gmail.com",
      score: 67,
    },
    {
      name: "Nguyễn Ngọc Mai Anh",
      email: "maianh.nhh.2311@gmail.com",
      score: 46,
    },
    {
      name: "Đào Võ Hiền Linh",
      email: "daohienlinhvo236@gmail.com",
      score: 31,
    },
    {
      name: "Đặng Phạm Thanh Kim Cương",
      email: "dpcuongstudying@gmail.com",
      score: 94,
    },
    {
      name: "Nguyễn Trần Tuyết Nhi",
      email: "ngtrantuyetnhi7777@gmail.com",
      score: 14,
    },
    {
      name: "Đinh Hoàng Anh Tuấn",
      email: "huongnttss150102@fpt.edu.vn",
      score: 87,
    },
    {
      name: "Đậu Thị Ngọc Dung",
      email: "dauthingocdung1512@gmail.com",
      score: 25,
    },
    {
      name: "Trần Thị Kim Anh",
      email: "anhttkss150260@fpt.edu.vn",
      score: 74,
    },
    {
      name: "Phạm Đặng Như Tuyết",
      email: "tuyetpdnse161347@fpt.edu.vn",
      score: 70,
    },
    {
      name: "Lưu Nguyễn Thục Đoan",
      email: "thucdoan.luunguyen@gmail.com",
      score: 39,
    },
  ];
  const sortRankingListByScore = (list: RankingItem[]): RankingItem[] => {
    return list.sort((a, b) => b.score - a.score);
  };

  const sortedRankingList: RankingItem[] = sortRankingListByScore(rankingList);

  return (
    <div className="m-5 w-full overflow-hidden rounded-lg border border-gray-200 bg-white">
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Rank
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Name
            </th>
            <th scope="col" className="px-6 py-4 font-medium text-gray-900">
              Hour of study
            </th>
            <th
              scope="col"
              className="px-6 py-4 font-medium text-gray-900"
            ></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          {sortedRankingList.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-6 py-4">
                <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1   font-semibold text-green-600">
                  {index + 1}
                </span>
              </td>
              <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                <div className="text-sm">
                  <div className="font-medium text-gray-700">{item.name}</div>
                  <div className="text-gray-400">{item.email}</div>
                </div>
              </th>

              <td className="px-6 py-4">{item.score}</td>
              <td className="px-6 py-4">
                <div className="flex gap-2">
                  {index === 0 ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                      Most productive user
                    </span>
                  ) : index === 1 ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-yellow-50 px-2 py-1 text-xs font-semibold text-yellow-600">
                      Second most productive user
                    </span>
                  ) : index === 2 ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-pink-50 px-2 py-1 text-xs font-semibold text-pink-600">
                      Third most productive user
                    </span>
                  ) : null}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
