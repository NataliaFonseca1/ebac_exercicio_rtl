import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve verificar se há dois comentarios', () => {
        render(<PostComment/>);
        fireEvent.change(screen.getByTestId('textarea-comentario'),{
            target: {
                value:'Comentário adicionado via testes',
            }
        });
        fireEvent.click(screen.getByTestId('button-comentario'));
        fireEvent.change(screen.getByTestId('textarea-comentario'),{
            target: {
                value:'Segundo comentário adicionado via testes',
            }
        });
        fireEvent.click(screen.getByTestId('button-comentario'));

        expect(screen.getAllByTestId('campo-comentarios')).toHaveLength(2);
    });
});