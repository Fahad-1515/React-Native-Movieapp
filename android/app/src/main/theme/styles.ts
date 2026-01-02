import { StyleSheet } from 'react-native';

export const colors = {
  bg: '#0F172A',
  card: '#1E293B',
  text: '#E5E7EB',
  muted: '#9CA3AF',
  accent: '#38BDF8',
};

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.bg,
    padding: 12,
  },
  card: {
    backgroundColor: colors.card,
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
  },
  title: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '600',
  },
  subtitle: {
    color: colors.muted,
    fontSize: 13,
    marginTop: 4,
  },
  button: {
    marginTop: 8,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: colors.accent,
    fontWeight: '600',
  },
});
