import styles from './Container.module.css'

type MyComponentProps = React.PropsWithChildren<{}>;

// eslint-disable-next-line react/prop-types
function Container({ children }: MyComponentProps) {
    return (
        <section className={styles.container}>
            { children }
        </section>
    )
}

export default Container
