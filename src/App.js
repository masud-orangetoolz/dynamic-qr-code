import React, { useEffect, useRef, useState } from 'react';
import QRCodeStyling from 'qr-code-styling';
import { Container, Grid } from '@mui/material';
import QRForm from './components/QRForm';

export default function App() {
// All options that we can modify by our app 
    const [options, setOptions] = useState({
        width: 300,
        height: 300,
        data: 'https://hello.com',
        type: 'svg',
        image: 'https://img.freepik.com/free-vector/cat-elegant-tie_71593-692.jpg?size=338&ext=jpg',
        dotsOptions: {
            color: '#8e44ad',
            type: 'classy',
            gradient: {
                type: 'linear',
                colorStops: [
                    { color: 'red', offset: 0 },
                    { color: 'orange', offset: 1 },
                ],
                rotation: 45,
            },
        },
        imageOptions: {
            crossOrigin: 'anonymous',
            margin: 10,
        },
        cornersSquareOptions: {
            type: 'extra-rounded',
            color: '#192a56',
        },
        cornersDotOptions: {
            type: 'dot',
            color: '#B33771',
        },
        backgroundOptions: {
            // "color": "#f5f6fa"
        },
    });
    const [fileExt, setFileExt] = useState('svg');
    const [qrCode, ] = useState(new QRCodeStyling(options));

    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            qrCode.append(ref.current);
        }
    }, [qrCode, ref]);

    useEffect(() => {
        if (!qrCode) return;
        qrCode.update(options);
    }, [qrCode, options]);

    const onDataChange = (event) => {
        setOptions((options) => ({
            ...options,
            data: event.target.value,
        }));
    };

    const onExtensionChange = (event) => {
        setFileExt(event.target.value);
    };

    const onDownloadClick = () => {
        qrCode.download({
            extension: fileExt,
        });
        console.log(qrCode);
    };

    return (
        <Container >
            <Grid container spacing="2">
                <QRForm
                    onDataChange={onDataChange}
                    options={options}
                    setOptions={setOptions}
                />
                <Grid item xs={12} md={5}>
                    <div className="qr-image" ref={ref} />
                    <div className="img_select_conainer">
                        <select onChange={onExtensionChange} value={fileExt}>
                            <option value="png">PNG</option>
                            <option value="jpeg">JPEG</option>
                            <option value="webp">WEBP</option>
                        </select>
                        <button onClick={onDownloadClick}>Download</button>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
}
