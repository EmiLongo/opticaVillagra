// src/shared/cart/ModalDeleteCartItem.tsx
import { Box, Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ICartItem } from "./types";
import { Heading4, Heading5 } from "@theme/textStyles";
import warning from "@img/warning.png"
import { greyColor, redColor } from "@theme/theme";
import { ColorButton } from "@shared/components/buttons/ColorButton";
import { useCart } from "@store/useCartStore";
import { toast } from "react-toastify";

interface IModalDeleteCartItem {
  openDeleteModal: boolean;
  closeDeleteItemModal: ()=>void;
  cartItem: ICartItem;
  closeCartDrawer: ()=>void;
}
export const ModalDeleteCartItem: React.FC<IModalDeleteCartItem> = ({
  openDeleteModal, 
  closeDeleteItemModal, 
  cartItem,
  closeCartDrawer,
}) =>{
  const { removeProduct, error, isLoading, clearError } = useCart();
    const [isFetching, setIsFetching] = useState<boolean>(false)

  const handleDeleteCartItem = () => {
    setIsFetching(true)
    removeProduct(cartItem.productId);
  }

  useEffect(() => {
    if(error){
    toast.error("Error: No se pudo borrar el Item")
    const timeout = setTimeout(() => {
      clearError();
    }, 5000);
    return () => clearTimeout(timeout); // Limpia si se desmonta antes
    }
  }, [error])

  useEffect(() => {
    if (isFetching && !isLoading && !error) {
      setIsFetching(false)
      closeCartDrawer();
      toast.success("El item fue borrado con éxito");
      closeDeleteItemModal();
    }
  }, [isFetching])

  return (
    <Modal
      open={openDeleteModal}
    >
      <Box
       sx={{ 
        backgroundColor: greyColor[50],
        width: "450px",
        height: "350px",
        padding: '1rem',
        borderRadius: "12px",
        position: "absolute",
        top: "30%",
        left: "50%",
        transform: "translate(-50%, 0)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
      >

          <Box component={"img"} src={warning} alt="Muestra advertencia de la acción" height="100px"
            sx={{ margin: '1rem auto', }}
          />
          <Box sx={{height: "100%"}}>

            <Heading4
              sx={{
                width: '100%',
                textAlign: 'center',
                color: redColor[800],
                lineHeight: '1.5em',
              }}>
              ¿Desea continuar con la eliminación de
            </Heading4>
            <Heading4
              sx={{
                width: '100%',
                textAlign: 'center',
                color: redColor[800],
                lineHeight: '1.5em',
                textWrap: "balance",
                marginBottom:"1rem"
              }}>
              {cartItem.product.title}?
            </Heading4>
            <Heading5
              sx={{
                marginX: 'auto',
                width: '70%',
                textAlign: 'center',
                lineHeight: '1.2em',
              }}
            >
              Una vez eliminado tendrá que cargarlo nuevamente.
            </Heading5>
          </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            gap: '1rem',
            marginX: '2rem',
            marginBottom: '1rem',
          }}
        >
          <ColorButton 
            id="bt-modal-confirm-delete-item-delete"
            onClick={handleDeleteCartItem} 
            type="redButton" 
            text="Eliminar"
            fetchingText="Eliminando"
            isFetching={isFetching}
            disabled={isFetching}
            sx={{ width: '40%' }}  
          />
          <ColorButton 
          onClick={closeDeleteItemModal} 
          sx={{ width: '40%' }}
          id="bt-modal-confirm-delete-item-back"
          type="blueButton"
          text="Volver"
          fetchingText="Volver"
          isFetching={isFetching}
          disabled={isFetching}
          />
            
        </Box>
      </Box>
    </Modal>
  )
}