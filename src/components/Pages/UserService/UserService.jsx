import React from 'react';
import './UserService.css';
import handShadow from '../../../images/service/headerShadow.png';
import UserServiceDetails from './UserServiceDetails/UserServiceDetails';

const userServiceData = [
  {
    id: 1,
    title1: '料理レシピ紹介系',
    title2: 'チャンネル',
    description:
      '去年チャンネルを立ち上げてから、レシピ動画を色々とアップしていましたが、 視聴者数が増えず悩んでいたところ、動画の編集から撮影ノウハウ、動画のタイトル作成やチャンネルアイコンまで色々と手伝っていただいて大変満足しております。現在は登録者数も5万人を超え順調に上がっています。',
  },
  {
    id: 2,
    title1: 'グルメ紹介系',
    title2: 'グルメ紹介系',
    description:
      '動画の企画からちゃんと相談に乗ってもらって、大変助けになりました。特に動画の撮影のポイントを教えていただいて、綺麗で洒落た動画が取れるようになり、登録者も倍以上増えました。 ありがとうございます。',
  },
  {
    id: 3,
    title1: '日常生活V-log系',
    title2: 'チャンネル',
    description:
      '最初は自分で企画して、撮影して、編集までしていて、動画一本作るにもかなり時間がかかってしまい、YouTuberをやめようかも悩みました。そこでこちらのサービスに出会い、動画編集やマーケティングなどを全ておまかせし、自分は自分が好きでうまくできる部分だけに集中できるようになりました。目標の登録者数まではまだまだ遠いですが、つい最近YouTubeの収益も稼げるようになって大変感謝しています。',
  },
];

const UserService = () => {
  return (
    <div className='userService'>
      <div className='container'>
        <div className='userServiceTitle'>
          <img src={handShadow} alt='' style={{ width: '330px', height: '25px' }} />
          <h3 className='text-center'>サービス利用者からの声</h3>
        </div>
        <div className='row '>
          {userServiceData.map((service, id) => (
            <UserServiceDetails key={id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserService;
