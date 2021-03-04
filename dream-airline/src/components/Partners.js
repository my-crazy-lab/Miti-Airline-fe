import React,{useContext} from 'react';
import "./Partners.css"
import {FlyContext} from '../context';

const Partners =() =>{
  const context = useContext(FlyContext);
  return(
    <div ref={context.refAirlinePartner} className="partner-frame">
      <div className="partner">
        <div className="partner-topic">
          <p className="partner-topic-text style-topic">{context.thisLanguage.airlinePartner}</p>  
          <span className="partner-topic-text-under">Domestic & International Airline Partners</span>
          <span className="style-text">We are partnering with various airlines across the globe to get you to wherever you need to be.</span>
        </div>
        <div className="partner-logo">
          <a>
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/05/05/1493985277541-2ba6507e342e32de676bece5141d8c5c.png?tr=q-75,w-82"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/05/05/1493985271928-a1e7908a5db1fd8968a913da65f7b630.png?tr=q-75,w-82"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/05/05/1493985292493-8696111bfe2e7cd38132903628511ac9.png?tr=q-75,w-82"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/05/19/1495172348322-b70010324fe47ccd7bf3687168863032.jpeg?tr=q-75,w-82"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/05/05/1493985173945-c62ab349d7c969b9c72d61f9b2437dcb.png?tr=q-75,w-82"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/05/19/1495172330504-60948a27f62072e669342f59c9e0a63c.png?tr=q-75,w-82"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/05/19/1495172760145-283e6c228f5edf97c5899e036fb0e6a8.png?tr=q-75,w-82"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/05/19/1495173745796-d7f9166f3b4a3f03abbceb9e32de10ce.png?tr=q-75,w-82"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/05/05/1493985231969-2ce58756c16a3d4540eba6141bfa0be9.png?tr=q-75,w-82"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/05/19/1495173340279-343b7c7a2abf878e2ebb89971cd19668.png?tr=q-75,w-82"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/05/05/1493985303448-fade2418ae798d6dc2b3fd16643d0380.png?tr=q-75,w-82"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/05/19/1495173340279-343b7c7a2abf878e2ebb89971cd19668.png?tr=q-75,w-82"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/05/19/1495173394912-564a69782e25063ecb73625bc6c83f8c.png?tr=q-75,w-82"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/05/05/1493985372038-993eec27e88ff0d7df762739ef7de92a.png?tr=q-75,w-82"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/05/05/1493985339968-307bebb0376d0121fb291cfd02829243.png?tr=q-75,w-82"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/05/05/1493985433417-9b056031d7d90299c1ee863364b92fbe.png?tr=q-75,w-82"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/05/19/1495173434880-ca0fedb399cc61deecf7ed8b8bcbc12b.png?tr=q-75,w-82"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/05/05/1493985385160-a6a02a99c5509c68234888d2e240599b.png?tr=q-75,w-82"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/05/19/1495173510399-2e09c4bca434ef1722fa23e7bf09ed73.png?tr=q-75,w-82"></img>
          </a>
          <a>
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/05/19/1495173542469-e5fd008b874129bc8205a0af5bbb4d66.png?tr=q-75,w-82"></img>
          </a>
        </div>
      </div>
      <div className="partner">
        <div className="partner-topic">
          <p className="partner-topic-text style-topic">{context.thisLanguage.paymentPartner}</p>  
          <span className="style-text">We are partnering with the most reliable payment service providers to make sure every transaction is smooth and worry-free!</span>
        </div>
        <div className="partner-logo">
          <a>
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/05/05/1493965721931-4ea361bbbfe4f0d1f089dda7d140ebdb.png?tr=q-75,w-29"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/05/05/1493965698950-8ca9c8b33d62a1e94407ff28bb59653e.png?tr=q-75,w-29"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/05/05/1493965685983-5ae0190662c697cb20d3c4674f1e7283.png?tr=q-75,w-29"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/05/05/1493965645108-4f05f6c4d9c020a873a2eeec6d3b30e9.png?tr=q-75,w-29"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/12/12/1513064337520-9dcf00649f641a23e29a0264e6315082.png?tr=q-75,w-29"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/05/05/1493965671434-86daad2188572a14c4e9073a319ea43d.png?tr=q-75,w-29"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/05/05/1493965656613-a9cd3f1a81e8c7aaefb65b2a7e90f48c.png?tr=q-75,w-29"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/10/10/1507635781118-545f238be3202c44fa36aea38147df23.png?tr=q-75,w-29"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/10/10/1507635811261-4bf6bfc01b74ea2aa42f95db0afa0d20.png?tr=q-75,w-29"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/10/10/1507635846574-c1cf895e33641406ef51512d1b186d62.png?tr=q-75,w-29"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/10/10/1507635924951-01d25b841d88f5f35ecf593fd79b9497.png?tr=q-75,w-29"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/10/10/1507636042466-c7371904fcb19ed0d3dc6b96b2244890.png?tr=q-75,w-29"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/10/10/1507636079546-40be9f6e5a7ccfe63fd83d848eeb1361.png?tr=q-75,w-29"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/05/05/1493965860600-14aeca098e0cc4f6f8e4bc784e4c26fa.png?tr=q-75,w-29"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/05/05/1493965822357-c2adcc887b40431d7ebf2d3879509eea.png?tr=q-75,w-29"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/10/10/1507636667846-f5920302caa2c2d9b79fb3fe954e5d77.png?tr=q-75,w-29"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/05/05/1493965425805-ab3affbe3626e7c67ed2317eaee6d2be.png?tr=q-75,w-29"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/10/10/1507636701819-930192ec09a3fb211e72aaec538d4f95.png?tr=q-75,w-29"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/10/10/1507636735346-0faf8eff84c30026c30631b43ca767ea.png?tr=q-75,w-29"></img>
          </a>
          <a>
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/05/05/1493965808420-e8103d876df1707811b87d0a8f04dbdf.png?tr=q-75,w-29"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/10/10/1507636767222-4114c9391b89e97a46b2048d5b455b05.png?tr=q-75,w-29"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/10/10/1507636776451-c089c7bdcf590dd13ff7ef06cb6421ee.png?tr=q-75,w-29"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/10/10/1507636819179-76d0ffd3c7b865f8001c7c463864a545.png?tr=q-75,w-29"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/10/10/1507636845907-8526b6f16a2070af3b2847ab0ee56e1d.png?tr=q-75,w-29"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/05/05/1493965633241-a3700e1437acc98c9f8f8e1dc53e9f2d.png?tr=q-75,w-29"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/05/05/1493966092013-0995939cf7d29683d27d0aabf847541d.png?tr=q-75,w-29"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/10/10/1507636917700-edcc243555714c9d744ea0cef434a4e4.png?tr=q-75,w-29"></img>
          </a>
          <a>
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/10/10/1507636937671-6224b4b15a0852900876146a4349f674.png?tr=q-75,w-29"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/10/10/1507636978574-d4a34347787e646bc195942420d259c3.png?tr=q-75,w-29"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/10/10/1507636993786-f59c285011127fe2a4b76eed1116a5df.png?tr=q-75,w-29"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/10/10/1507637141545-bb9beac06ee5f2d4fa8e31f80bb6fc94.png?tr=q-75,w-29"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/10/10/1507637180589-6690998caca7c494b67e1b78efe90429.png?tr=q-75,w-29"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/10/10/1507637194544-bdfdc5138b65fca031e33870123d3e2a.png?tr=q-75,w-29"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/10/10/1507637223720-4617316dfcf191bc0c5b1a3661c30fe9.png?tr=q-75,w-29"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/10/10/1507637273771-f7fd9451c3221be4cab184d1ad496948.png?tr=q-75,w-29"></img>
          </a>
          <a>
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/10/11/1507694167372-3ab2f002cf4699e1065cfbdf30b40aba.png?tr=q-75,w-29"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2018/01/05/1515145926794-f8dbcf2421c14618747a6a90ddfcba0f.png?tr=q-75,w-29"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/10/11/1507694193998-5f8bdefbacb0822ef8849e64c57b4146.png?tr=q-75,w-29"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/10/11/1507694209019-bb0bde3a8876e9473578503a4bb54064.png?tr=q-75,w-29"></img>
          </a>
          <a>
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/10/11/1507694268926-d6221fb46d94d21f94a9704b402f813f.png?tr=q-75,w-29"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/10/11/1507694276459-ff40299bf14c6aebfc457b4a21bf9a53.png?tr=q-75,w-29"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/10/11/1507694315257-76a42ad26eb3ed7989c6d8c997c28779.png?tr=q-75,w-29"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/10/11/1507694360842-68ea67e6b66d3eaabb09a3eb7fed6d85.png?tr=q-75,w-29"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/10/11/1507694424667-26f73e74f042dc7f02da38804447e729.png?tr=q-75,w-29"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/10/11/1507694445716-cec4bdedb94e20cb965b82f1cc5fbd8e.png?tr=q-75,w-29"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/10/11/1507694465602-4ddcffac5898833d97e7a93c6500fbd4.png?tr=q-75,w-29"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/10/11/1507694486104-6db5e755ca6c3b589ef7f1dfff8bda54.png?tr=q-75,w-29"></img>
          </a>
          <a>
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/10/11/1507694529541-8e643f4a265f6bfdfc2aad7e773c0a15.png?tr=q-75,w-29"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/10/11/1507694676702-7b9f4a86a7b6751c2f097edff3a09569.png?tr=q-75,w-29"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/10/11/1507694681289-c9a893e0dc5970342df3e6c17319fe96.png?tr=q-75,w-29"></img>
          </a>
          <a>            
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/10/11/1507694735397-fce2981f1d7ecf3a8e34b3074d640efc.png?tr=q-75,w-29"></img>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Partners;