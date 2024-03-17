import React, { useState, useRef } from 'react';
import { CardHeader, CardBody, CardFooter } from './index.card';
import { Modal, ModalContent, ModalHeader, ModalBody } from '../modal/index.modal';
import { Carousel } from '../carousel/index.carousel'; // Importamos el componente Carousel
import Button from '../button/Button';
import { FaShare, FaTimes } from 'react-icons/fa';
import formatPrice from '../../utils/formatPrice';
import copyToClipboard from '../../utils/copyToClipboard';
import changeBodyOverflow from '../../utils/changeBodyOverflow';

const Card = ({ data }) => {

    const [showModal, setShowModal] = useState(false);
    const [shareModal, setShareModal] = useState(false); // Nuevo estado para el modal de compartir

    const inputRef = useRef(null);

    const [copy, setCopy] = useState(false);

    const openModal = () => {
        setShowModal(true);
        changeBodyOverflow('hidden');
    };

    const closeModal = () => {
        setShowModal(false);
        changeBodyOverflow('auto');
    };

    const openShareModal = () => {
        setShareModal(true);
        changeBodyOverflow('hidden');
    };

    const closeShareModal = () => {
        setShareModal(false);
        changeBodyOverflow('auto');
    };

    const isCopied = (text) => {
        const copy = copyToClipboard(`https://google.com/search?q=${(text).replace(/ /g, '+').toLowerCase()}`);

        if (copy) {
            setCopy(true);
            inputRef.current.select();
            setTimeout(() => {
                setCopy(false);
                inputRef.current.blur();
            }, 2000);
        }
    }

    return (
        <div className=" group ">
            <CardHeader>
                <div className="relative">
                    <div onClick={openModal} className="cursor-pointer">
                        <img
                            className="object-cover rounded-2xl aspect-square"
                            src={data.thumbnail}
                            alt="Product"
                            loading='lazy'
                        />
                    </div>
                    <Button
                        onClick={openShareModal}
                        variant="text"
                        className="absolute top-3 right-3 text-gray-500 text-lg bg-gray-100 px-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                        <FaShare />
                    </Button>
                </div>
            </CardHeader>
            <CardBody>
                <p className="text-base font-normal truncate dark:text-white">{data.title}</p>
                <div className="flex items-center">
                    <p className="text-xs font-normal">${data.price}</p>
                    {data.discountPercentage && (
                        <del className="text-xs text-[#798291] dark:dark:text-[#9ba6b8] ml-2">
                            <p>{formatPrice(data.price, data.discountPercentage)}</p>
                        </del>
                    )}
                </div>
            </CardBody>
            <CardFooter>
                <Button
                    variant='text'
                    href={`https://reach.dog/search?q=${data.title.replace(/ /g, '+').toLowerCase()}`}
                    className="text-xs text-[#798291] dark:text-[#9ba6b8] px-0 py-0"
                >{data.brand}
                </Button>
            </CardFooter>

            <Modal showModal={showModal} setShowModal={setShowModal}>
                <ModalContent>
                    <ModalHeader>
                        <Button onClick={closeModal}
                            variant="text"
                            className=" ml-auto">
                            <FaTimes />
                        </Button>
                    </ModalHeader>
                    <ModalBody>
                        <div className="flex flex-col sm:flex-row gap-4 p-1">
                            <div className="mx-auto max-w-[300px] w-full">
                                <Carousel images={data.images} />
                            </div>

                            <div className="flex flex-col gap-4">
                                <h2 className="text-xl font-medium text-balance">{data.title}</h2>
                                <div className="flex items-center">
                                    <p className="text-xs text-[#798291] dark:text-[#9ba6b8] font-normal cursor-auto">${data.price}</p>
                                    {data.discountPercentage && (
                                        <del className="text-xs text-[#798291] dark:text-[#9ba6b8] cursor-auto ml-2">
                                            <p>{formatPrice(data.price, data.discountPercentage)}</p>
                                        </del>
                                    )}
                                </div>
                                <p className="text-base font-normal text-pretty">{data.description}</p>
                                <Button
                                    href={`https://reach.dog/search?q=${data.title.replace(/ /g, '+').toLowerCase()}`}
                                    variant="text"
                                    className="w-fit text-[#798291] dark:text-[#9ba6b8] text-xs px-0 py-0"
                                >
                                    {data.brand}
                                </Button>
                                <Button href={`https://google.com/search?q=${data.title.replace(/ /g, '+').toLowerCase()}`}>
                                    Shop Now
                                </Button>
                            </div>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>

            <Modal showModal={shareModal} setShowModal={setShareModal}>
                <ModalContent>
                    <ModalHeader>
                        <Button onClick={closeShareModal}
                            variant="text"
                            className=" ml-auto">
                            <FaTimes />
                        </Button>
                    </ModalHeader>
                    <ModalBody>
                        <div className="flex flex-col items-center justify-center gap-4">
                            <h2 className="text-xl font-medium">
                                Share this product
                            </h2>
                            <div className="relative flex ">
                                <input
                                    type="text"
                                    value={`https://google.com/search?q=${(data.title).replace(/ /g, '+').toLowerCase()}`}
                                    readOnly
                                    className="pr-28 text-[#798291] dark:text-[#9ba6b8] dark:bg-[#16171b] dark:border-[#373a45] sm:min-w-96 w-full border-[1px] rounded-full border-gray-300 text-xs py-3 px-2 focus:outline-green-400 focus:border-green-400"
                                    ref={inputRef}
                                />
                                <Button
                                    className="absolute top-1 right-1 text-xs min-w-20 text-white"
                                    onClick={() => isCopied(data.title)}>
                                    {
                                        copy ? 'Copied' : 'Copy'
                                    }
                                </Button>
                            </div>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>

        </div>

    );
};

export default Card;
