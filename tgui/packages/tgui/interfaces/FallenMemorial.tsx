import { useBackend } from '../backend';
import { Box, Section, Table } from '../components';
import { Window } from '../layouts';

type FallenEntry = {
  name: string;
  rank: string;
};

type Data = {
  fallen: FallenEntry[];
  ship_name: string;
};

export const FallenMemorial = (props) => {
  const { data } = useBackend<Data>();
  const { fallen, ship_name } = data;

  return (
    <Window title={ship_name + ' — Memorial'} width={400} height={500}>
      <Window.Content scrollable>
        <Section title="Fallen Marines">
          {fallen.length === 0 ? (
            <Box color="good">No marines lost.</Box>
          ) : (
            <Table>
              <Table.Row header>
                <Table.Cell>Name</Table.Cell>
                <Table.Cell>Assignment</Table.Cell>
              </Table.Row>
              {fallen.map((entry, i) => (
                <Table.Row key={i}>
                  <Table.Cell bold>{entry.name}</Table.Cell>
                  <Table.Cell color="label">{entry.rank}</Table.Cell>
                </Table.Row>
              ))}
            </Table>
          )}
        </Section>
      </Window.Content>
    </Window>
  );
};