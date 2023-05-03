// TODO: insert text about how to manualy calculate things
import { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import { Button } from '@chakra-ui/react';
import styles from './Calculator.module.css';

const Calculator = () => {
    const [oldStitchCount, setOldStitchCount] = useState(0);
    const [newStitchCount, setNewStitchCount] = useState(0);
    const [calc, setCalc] = useState(false);

    return (
        <div>
            <div>
                <Formik
                    initialValues={{
                        oldStitchCount: 0,
                        newStitchCount: 0,
                    }}
                    onSubmit={(values) => {
                        setOldStitchCount(values.oldStitchCount);
                        setNewStitchCount(values.newStitchCount);
                    }}
                >
                    <Form>
                        <label>
                            Antall masker nå:
                            <Field
                                name="oldStitchCount"
                                className={styles.field}
                            ></Field>
                        </label>
                        <label>
                            Ønsket antall masker:
                            <Field
                                name="newStitchCount"
                                className={styles.field}
                            ></Field>
                        </label>
                        <Button
                            type="submit"
                            onClick={() => setCalc(true)}
                            className={styles.button}
                        >
                            Regn ut
                        </Button>
                    </Form>
                </Formik>
            </div>
            <div>
                {calc != true ? (
                    <></>
                ) : (
                    <div>
                        {oldStitchCount < newStitchCount ? (
                            <div>
                                Du skal øke med{' '}
                                {newStitchCount - oldStitchCount} maske(r).
                                {oldStitchCount %
                                    (newStitchCount - oldStitchCount) ==
                                0 ? (
                                    <div>
                                        Maskeantallet går opp. Det betyr at for
                                        hver{' '}
                                        {oldStitchCount /
                                            (newStitchCount - oldStitchCount)}
                                        .maske må du øke 1 maske.
                                    </div>
                                ) : (
                                    <div>
                                        Maskeantallet går ikke jevnt opp. Du kan
                                        ikke øke hver{' '}
                                        {(
                                            oldStitchCount /
                                            (newStitchCount - oldStitchCount)
                                        ).toFixed(1)}
                                        maske, og må derfor noen ganger øke hver{' '}
                                        {Math.floor(
                                            oldStitchCount /
                                                (newStitchCount -
                                                    oldStitchCount)
                                        )}
                                        .maske og noen ganger hver{' '}
                                        {Math.ceil(
                                            oldStitchCount /
                                                (newStitchCount -
                                                    oldStitchCount)
                                        )}
                                        .maske. Du må øke hver{' '}
                                        {Math.ceil(
                                            oldStitchCount /
                                                (newStitchCount -
                                                    oldStitchCount)
                                        )}
                                        .maske{' '}
                                        {oldStitchCount -
                                            Math.floor(
                                                oldStitchCount /
                                                    (newStitchCount -
                                                        oldStitchCount)
                                            ) *
                                                (newStitchCount -
                                                    oldStitchCount)}{' '}
                                        ganger. Fordel dette i mellom de{' '}
                                        {newStitchCount -
                                            oldStitchCount -
                                            (oldStitchCount -
                                                Math.floor(
                                                    oldStitchCount /
                                                        (newStitchCount -
                                                            oldStitchCount)
                                                ) *
                                                    (newStitchCount -
                                                        oldStitchCount))}{' '}
                                        andre gangene du skal øke.
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div>
                                Du skal felle av{' '}
                                {oldStitchCount - newStitchCount} maske(r).
                                {oldStitchCount %
                                    (newStitchCount - oldStitchCount) ==
                                0 ? (
                                    <div>
                                        Maskeantallet går opp. Det betyr at for
                                        hver{' '}
                                        {oldStitchCount /
                                            (oldStitchCount - newStitchCount)}
                                        .maske må du felle 1 maske. Strikk hver{' '}
                                        {oldStitchCount /
                                            (oldStitchCount - newStitchCount) -
                                            2}
                                        . og{' '}
                                        {oldStitchCount /
                                            (oldStitchCount - newStitchCount) -
                                            1}
                                        . maske sammen.
                                    </div>
                                ) : (
                                    <div>
                                        Maskeantallet går ikke jevnt opp. Du kan
                                        ikke felle hver{' '}
                                        {(
                                            oldStitchCount /
                                            (oldStitchCount - newStitchCount)
                                        ).toFixed(1)}
                                        maske, og må derfor noen ganger felle
                                        hver{' '}
                                        {Math.floor(
                                            oldStitchCount /
                                                (oldStitchCount -
                                                    newStitchCount)
                                        )}
                                        .maske og noen ganger hver{' '}
                                        {Math.ceil(
                                            oldStitchCount /
                                                (oldStitchCount -
                                                    newStitchCount)
                                        )}
                                        .maske. Du må felle hver{' '}
                                        {Math.ceil(
                                            oldStitchCount /
                                                (oldStitchCount -
                                                    newStitchCount)
                                        )}
                                        .maske{' '}
                                        {oldStitchCount -
                                            Math.floor(
                                                oldStitchCount /
                                                    (oldStitchCount -
                                                        newStitchCount)
                                            ) *
                                                (oldStitchCount -
                                                    newStitchCount)}{' '}
                                        ganger. Fordel dette i mellom de{' '}
                                        {oldStitchCount -
                                            newStitchCount -
                                            (oldStitchCount -
                                                Math.floor(
                                                    oldStitchCount /
                                                        (oldStitchCount -
                                                            newStitchCount)
                                                ) *
                                                    (oldStitchCount -
                                                        newStitchCount))}{' '}
                                        andre gangene du skal felle av. Husk at
                                        når du skal felle av feks. hver 5. maske
                                        skal du strikke maske 4 og 5 sammen.
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Calculator;
