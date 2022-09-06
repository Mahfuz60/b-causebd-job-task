import React from 'react';
import './ServiceFlow.css';
import handShadow from '../../../images/service/headerShadow.png';
import ServiceFlowDetails from './ServiceFlowDetails/ServiceFlowDetails';

const serviceFlowData = [
  
  {
    id: 1,
    title: ' お問合せ',
    description: 'お問合せ及び見積は無料です。 いつでも気軽にご連絡ください。',
  },
  {
    id: 2,
    title: '担当者とのミーティング',
    description: 'どのようなサービスが必要なのかを 決めるためにミーティングを行います。',
  },
  {
    id: 3,
    title: '見積作成及び確認',
    description: '確認した内容をもとにお客様に最も適した プランをご提案させて頂きます。',
  },
  {
    id: 4,
    title: '発注',
    description:
      '見積をご確認後、問題なければ担当者に発注の旨を ご連絡ください。すぐ作業に取り掛からせて頂きます。',
  },
  {
    id: 5,
    title: 'サービス開始及び結果物納品',
    description: 'サービス内容に合わせて作業を進めて、 指定の納期まで納品いたします',
  },
  {
    id: 6,
    title: 'サービス料金請求',
    description:
      '納品の際に金額を請求いたします。 (但し、個人様の場合は先払いでお願いしております)',
  },
];

const ServiceFlow = () => {
  return (
    <div className='serviceFlow'>
      <div className='container'>
        <div className='flowTitle'>
          <img src={handShadow} alt='' style={{ width: '240px', height: '30px' }} />
          <h2 className='text-center'>サービスの流れ</h2>
        </div>
        <div className='row d-flex'>
          {serviceFlowData.map((service, id) => (
            <ServiceFlowDetails key={id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceFlow;
