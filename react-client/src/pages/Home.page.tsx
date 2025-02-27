/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { ScrollArea, Stack, Table } from '@mantine/core';

export function HomePage() {
  const [estados, setEstados] = useState([]);
  const estilosCuerpo = {
    padding: '10px',
    borderBottom: '1px solid #28A745',
  };
  const estilosCara = {
    color: '#FFFFFF',
    fontWeight: 'bold',
    padding: '12px',
    borderBottom: '2px solid #28A745',
  };

  useEffect(() => {
    const cargarDataEstados = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/hdi'); // URL de tu API
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        const estados = await response.json();
        console.log('Lista de Estados:', estados);
        setEstados(estados);
        return estados;
      } catch (error) {
        console.error('Error al obtener los estados:', error);
      }
    };
    cargarDataEstados();
  }, []);

  return (
    <>
      <Stack
        p={50}
        h="100vh"
        bg="var(--mantine-color-body)"
        align="stretch"
        justify="center"
        gap="md"
      >
        <ScrollArea style={{ width: '100%' }}>
          <Table
            striped
            highlightOnHover
            withColumnBorders
            style={{
              minWidth: 400,
              border: '1px solid #28A745',
            }}
          >
            <Table.Thead style={{ backgroundColor: '#28A745' }}>
              <Table.Tr>
                <Table.Th style={estilosCara}>ID</Table.Th>
                <Table.Th style={estilosCara}>Estado</Table.Th>
                <Table.Th style={estilosCara}>Abreviatura</Table.Th>
              </Table.Tr>
            </Table.Thead>

            <Table.Tbody>
              {estados.map((estado: any) => (
                <Table.Tr
                  key={estado.id}
                  style={{
                    transition: 'background-color 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#E9F9EB')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  <Table.Td style={estilosCuerpo}>{estado.id}</Table.Td>
                  <Table.Td style={estilosCuerpo}>{estado.nombre}</Table.Td>
                  <Table.Td style={estilosCuerpo}>{estado.abreviatura}</Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </ScrollArea>
      </Stack>
    </>
  );
}
