import { Card, Chip, IconButton } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorite } from '../State/Authentication/Action';
import { isPresentInFavorites } from '../Config/logic';

const AdvertisementCard = ({item}) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const {auth} = useSelector(store => store)

    const handleAddToFavorite = () => {
        dispatch(addToFavorite({advertisementId:item.id, jwt}))
    }

    const handleNavigateToRestaurant = () => {
        if(item.availability){
            navigate(`/advertisements/${item.districtCategory.name}/${item.title}/${item.id}`)
        }
    }

  return (
    
    <Card className='w-[18rem]'>

        <div className={`${true?'cursor-pointer':"cursor-not-allowed"} relative`}>
            <img className='w-full h-[10rem] rounded-t-md object-cover' src={item.images[0]} alt="" />

            <Chip size='small' className='absolute top-2 left-2' color={item.availability?"success":"error"} label={item.availability?"Available":"Unavailable"}></Chip>
        </div>

        <div className='p-4 textPart lg:flex w-full justify-between'>
            <div className='space-y-1'>
                <p onClick={handleNavigateToRestaurant} className='font-semibold text-lg cursor-pointer'>{item.title}</p>
                <p className='text-gray-500 text-sm'>
                    {item.districtCategory?.name}
                </p>
            </div>

            <div>
                <IconButton onClick={handleAddToFavorite}>
                    {isPresentInFavorites(auth.favorites, item)?<FavoriteIcon/>:<FavoriteBorderIcon/>}
                </IconButton>
            </div>
        </div>
    </Card>
  )
}

export default AdvertisementCard