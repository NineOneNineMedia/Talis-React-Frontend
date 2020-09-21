import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageGallery from 'react-image-gallery';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import "react-image-gallery/styles/scss/image-gallery.scss";


const images = [
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
];

const useStyles = makeStyles({
    root: {
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 100
    },
});

export default function PlacardGallery() {
    const classes = useStyles();
    function renderCustom() {
        return (
            <IconButton className={classes.root} aria-label="delete">
                <FavoriteBorderIcon fontSize="default" color="primary" />
            </IconButton>
        )
    }


    return (<ImageGallery
        items={images}
        showThumbnails={false}
        showFullscreenButton={false}
        showPlayButton={false}
        showIndex={false}
        renderCustomControls={renderCustom} />
    )

}
