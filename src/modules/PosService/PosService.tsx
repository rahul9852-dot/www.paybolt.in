
import PGAdvantage from '@/components/PGAdvantage/PGAdvantage';
import POSCollection from './POSCollection/POSCollection';
import POSFeature from './POSFeature/POSFeature';
import './PosService.scss';
import PosServiceBanner from './PosServiceBanner/PosServiceBanner';
import PosServiceOutline from './PosServiceOutline/PosServiceOutline';
import POSServicePlayList from './POSServicePlayList/POSServicePlayList';
const PosService = () =>{
  return (
    <>
      <div className="pos-banner pt-40">
        <PosServiceBanner/>
      </div>
      <PosServiceOutline/>
      <POSFeature/>
      <POSCollection/>
      <POSServicePlayList/>
      <PGAdvantage/>
    </>

  )
}

export default PosService;