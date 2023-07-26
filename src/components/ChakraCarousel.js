import React, { useRef } from 'react';
import Slider from 'react-slick';
import { Box, Image, Text, Grid, GridItem } from '@chakra-ui/react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
    const mainSlider = useRef();

    const mainSliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const images = [
        {
            src: 'https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
            title: 'Image 1 Title',
        },
        {
            src: 'https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2274&q=80',
            title: 'Image 2 Title',
        },
        {
            src: 'https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
            title: 'Image 3 Title',
        },
        // Adicione mais imagens e títulos aqui
    ];

    return (
        <Box>
            <Slider {...mainSliderSettings} ref={mainSlider}>
                {images.map((image, index) => (
                    <Box key={index} p={4} textAlign="center">
                        <Image src={image.src} alt={`Image ${index + 1}`} width={811} height={618} />
                        <Text mt={2} fontSize="lg" fontWeight="bold">
                            {image.title}
                        </Text>
                    </Box>
                ))}
            </Slider>
            <Grid templateColumns="repeat(3, 1fr)" gap={4} mt={4}>
                {images.map((image, index) => (
                    <GridItem key={index} textAlign="center">
                        <Image src={image.src} alt={`Thumbnail ${index + 1}`} width={436} height={292} />
                        <Text mt={2} fontSize="md" fontWeight="bold">
                            {image.title}
                        </Text>
                    </GridItem>
                ))}
            </Grid>
        </Box>
    );
};

export default Carousel;
